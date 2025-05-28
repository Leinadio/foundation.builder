import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default async function SuccessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 w-full">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Paiement réussi!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Merci pour votre achat. Votre paiement a été traité avec succès.
          </p>
          <p className="text-gray-600">
            Vous recevrez prochainement un email de confirmation avec tous les détails de votre transaction.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href={`/${lang}/app`} passHref>
            <Button>{`Retour à l'accueil`}</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
} 