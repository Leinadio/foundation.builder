import Image from "next/image";

export function ProductHungBadge() {
  return (
    <a
      href="https://www.producthunt.com/posts/womi?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-womi"
      target="_blank"
      className="flex justify-center"
    >
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=960432&theme=light&t=1746203235854"
        alt={"Womi - Test your business idea before wasting time (or money) | Product Hunt"}
        style={{ width: 250, height: 54 }}
        width="250"
        height="54"
      />
    </a>
  );
}
