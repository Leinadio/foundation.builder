import { User } from "@/core/models/user";
import { UserRepository } from "@/core/ports/out/user.repository";
import { supabase } from "@/lib/supabase-client";
import { RealtimeChannel, REALTIME_SUBSCRIBE_STATES } from "@supabase/supabase-js";

export class SupabaseUserRepositoryImpl implements UserRepository {
  private readonly TABLE_NAME = "users";

  public async getUser(id: string): Promise<User | null> {
    const { data, error } = await supabase.from(this.TABLE_NAME).select("*").eq("id", id).single();

    if (error) {
      throw error;
    }

    return data ? (data as User) : null;
  }

  public async getAllUsers(): Promise<User[]> {
    const { data, error } = await supabase.from(this.TABLE_NAME).select("*");

    if (error) {
      throw error;
    }

    return data as User[];
  }

  public async createUser(user: User): Promise<void> {
    const { error } = await supabase.from(this.TABLE_NAME).insert(user);

    if (error) {
      throw error;
    }
  }

  public async updateUser(user: User): Promise<void> {
    const { error } = await supabase.from(this.TABLE_NAME).update(user).eq("id", user.id);

    if (error) {
      throw error;
    }
  }

  public async deleteUser(id: string): Promise<void> {
    const { error } = await supabase.from(this.TABLE_NAME).delete().eq("id", id);

    if (error) {
      throw error;
    }
  }

  public subscribeToUser(id: string, onData: (user: User | null) => void, onError: (error: Error) => void): () => void {
    let channel: RealtimeChannel | null = null;

    try {
      channel = supabase
        .channel(`user_${id}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: this.TABLE_NAME,
            filter: `id=eq.${id}`,
          },
          async (payload) => {
            if (payload.eventType === "DELETE") {
              onData(null);
              return;
            }

            const user = await this.getUser(id);
            onData(user);
          }
        )
        .subscribe((status: REALTIME_SUBSCRIBE_STATES) => {
          if (status === "SUBSCRIBED") {
            return;
          }

          onError(new Error(`Subscription error: ${status}`));
        });
    } catch (error) {
      onError(error as Error);
    }

    return () => {
      channel?.unsubscribe();
    };
  }
}
