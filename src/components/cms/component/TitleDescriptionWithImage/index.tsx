import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  TitleDescriptionWithImageDataFragmentDoc,
  type TitleDescriptionWithImageDataFragment,
} from "@/gql/graphql";

export const TitleDescriptionWithImage: CmsComponent<
  TitleDescriptionWithImageDataFragment
> = ({ data }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        {data.Title && (
          <>
            <h1 className="hero-title">{data.Title}</h1>
          </>
        )}

        {data.Description?.json && (
          <>
            <p className="hero-description">{data.Description?.json}</p>
          </>
        )}
      </div>
    </section>
  );
};

TitleDescriptionWithImage.displayName = "TitleDescriptionWithImageComponent";
TitleDescriptionWithImage.getDataFragment = () => [
  "TitleDescriptionWithImageData",
  TitleDescriptionWithImageDataFragmentDoc,
];

export default TitleDescriptionWithImage;
