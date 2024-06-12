import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { About, MdxProject } from "@/@types/types";
import { useLocaleContext } from "@/components/LocaleContext/LocaleContext";
import useWindowDimensions from "@/lib/useWindowDimensions";
import Home from "@/components/pages/Home";
import { getAbout, getProjects, getStoneNumber } from "@/lib/api";

type ContentProps = {
  projects: MdxProject[];
  about: About;
};

type Props = {
  "pt-BR": ContentProps;
  "en-US": ContentProps;
  stoneNumber: number;
};

const Index = (props: Props) => {
  const [showTitle, setShowTitle] = useState(true);
  const { locale } = useLocaleContext();
  const { about, projects } = props[locale];
  const { stoneNumber } = props;

  const { height, scroll } = useWindowDimensions();
  const HEIGHT_SCROLL = 0.75;
  const dimension = scroll / HEIGHT_SCROLL / height;

  useEffect(() => {
    if (dimension < 2) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  }, [dimension]);

  return (
    <Dialog.Root>
      <div className="bg-black">
        <div
          style={{
            backgroundColor: `rgba(240,240,240,${dimension || 0})`,
          }}
        >
          <Home
            projects={projects}
            about={about}
            showTitle={showTitle}
            stoneNumber={stoneNumber}
          />
        </div>
      </div>
    </Dialog.Root>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const stoneNumber = getStoneNumber();
  const getLocaleProjects = async (locale: string) => {
    const projectsData = getProjects(locale, [
      "content",
      "excerpt",
      "images",
      "credits",
    ]);

    return await Promise.all(
      projectsData.map(async ({ content, data }) => {
        const parsedData = {
          ...data,
          excerpt: (await serialize(data.excerpt)).compiledSource,
          extraInfo: (await serialize(data.extraInfo)).compiledSource,
        };

        return await serialize(content, { scope: parsedData });
      })
    );
  };

  const getLocaleAbouts = async (locale: string) => {
    const aboutData = getAbout(locale, ["content"]);

    const [about, about2, contact] = await Promise.all(
      aboutData.map(
        async ({ content, data }) => await serialize(content, { scope: data })
      )
    );

    return { about, about2, contact };
  };

  const props = {
    "pt-BR": {
      projects: await getLocaleProjects("pt"),
      about: await getLocaleAbouts("pt"),
    },
    "en-US": {
      projects: await getLocaleProjects("en"),
      about: await getLocaleAbouts("en"),
    },
    stoneNumber,
  };

  return { props };
};
