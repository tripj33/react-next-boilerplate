import { Button } from "@/components/ui/button"
import { storyblokEditable } from "@storyblok/react"
import { ISbLinkType } from "@storyblok/react"
import * as Icons from "lucide-react"

interface ButtonBlokProps {
  blok: {
    text: string
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size: "default" | "sm" | "lg" | "icon"
    link: ISbLinkType
    icon?: string
    onClick?: string
    asChild?: boolean
    className?: string
  }
}

const ButtonBlok = ({ blok }: ButtonBlokProps) => {
  const handleClick = () => {
    if (blok.onClick) {
      try {
        const fn = new Function(blok.onClick);
        fn();
      } catch (error) {
        console.error('Error executing onClick function:', error);
      }
    }
  }

  const IconComponent = blok.icon ? Icons[blok.icon as keyof typeof Icons] : null;

  return (
    <Button
      {...storyblokEditable(blok)}
      variant={blok.variant}
      size={blok.size}
      onClick={blok.onClick ? handleClick : undefined}
      asChild={blok.link?.url ? true : blok.asChild}
      className={blok.className}
    >
      {blok.link?.url ? (
        <a href={blok.link.url} target={blok.link.target}>
          {IconComponent && <IconComponent className="mr-2" />}
          {blok.text}
        </a>
      ) : (
        <>
          {IconComponent && <IconComponent className="mr-2" />}
          {blok.text}
        </>
      )}
    </Button>
  );
}

export default ButtonBlok
