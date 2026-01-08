import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiRuby,
  SiAngular,
  SiVuedotjs,
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
  SiRecoil,
  SiJest,
  SiMocha,
  SiChai,
  SiCypress,
  SiNodedotjs,
  SiRubyonrails,
  SiPostgresql,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiBigcommerce,
  SiShopify,
  SiStorybook,
} from "react-icons/si";
import technologies from "./technologies.json";

const iconMap = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: SiOpenjdk,
  Ruby: SiRuby,
  Angular: SiAngular,
  "Vue.js": SiVuedotjs,
  "CSS/SCSS": SiCss3,
  HTML: SiHtml5,
  React: SiReact,
  Redux: SiRedux,
  Recoil: SiRecoil,
  XState: null,
  "Storybook.js": SiStorybook,
  Jest: SiJest,
  Mocha: SiMocha,
  Chai: SiChai,
  Enzyme: null,
  Cypress: SiCypress,
  RSpec: null,
  "Node.js": SiNodedotjs,
  "Ruby on Rails": SiRubyonrails,
  PostgreSQL: SiPostgresql,
  AWS: SiAmazon,
  Azure: null,
  "Google Cloud Platform": SiGooglecloud,
  Docker: SiDocker,
  BigCommerce: SiBigcommerce,
  Shopify: SiShopify,
};

function IconCloud() {
  const getSizeClass = (value) => {
    if (value === 3) return "text-5xl md:text-6xl";
    if (value === 2) return "text-3xl md:text-4xl";
    return "text-xl md:text-2xl";
  };

  // Generate non-overlapping positions using improved spacing algorithm
  const getRandomPosition = (index, total) => {
    const goldenAngle = 137.508; // Golden angle in degrees
    const angle = index * goldenAngle;
    // Increase spacing: minimum radius of 80px, maximum of 280px
    const baseRadius = 80 + Math.sqrt(index / total) * 200;
    // Add slight variation to prevent exact overlaps
    const variation = (index % 3) * 15;
    const x = Math.cos((angle * Math.PI) / 180) * (baseRadius + variation);
    const y = Math.sin((angle * Math.PI) / 180) * (baseRadius + variation);
    return { x, y };
  };

  const validTechnologies = technologies.filter((tech) => iconMap[tech.name]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center scale-50 md:scale-100">
      {validTechnologies.map((tech, index) => {
        const Icon = iconMap[tech.name];
        const { x, y } = getRandomPosition(index, validTechnologies.length);

        return (
          <div
            key={tech.name}
            className={`absolute ${getSizeClass(tech.value)} text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}
            title={tech.name}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              animation: `float ${6 + (index % 4) * 2}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}

export default IconCloud;
