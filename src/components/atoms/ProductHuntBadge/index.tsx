import Image from "next/image";

export const ProductHuntBadge = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/womi?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-womi"
      target="_blank"
      className="justify-center items-center flex mb-6"
    >
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=960432&theme=light&t=1746203235854"
        alt="Womi - Test&#0032;your&#0032;business&#0032;idea&#0032;before&#0032;wasting&#0032;time&#0032;&#0040;or&#0032;money&#0041; | Product Hunt"
        style={{ width: 250, height: 54 }}
        width="250"
        height="54"
      />
    </a>
  );
};
