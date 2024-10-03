/* eslint-disable react/jsx-no-undef */
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  TitleDescriptionWithImageDataFragmentDoc,
  type TitleDescriptionWithImageDataFragment,
} from "@/gql/graphql";
import AnimatedImage from "../CardBlock/motion";

export const TitleDescriptionWithImage: CmsComponent<
  TitleDescriptionWithImageDataFragment
> = ({
  data: { Title = "", Image, Description = { json: null } },
  inEditMode,
}) => {
  return (
    <section className="hero">
      <div className="hero-content">
        {(Title || inEditMode) && (
          <CmsEditable as="h2" cmsFieldName="Title">
            {Title}
          </CmsEditable>
        )}
        {(Description || inEditMode) && (
          <CmsEditable
            as={RichText}
            cmsFieldName="Description"
            text={Description?.json}
          />
        )}

        {(Image || inEditMode) && (
          <AnimatedImage imageLayout="after">
            <CmsEditable
              as={Image}
              cmsFieldName="Image"
              className="rounded-[40px] w-full"
              src={Image}
              alt={""}
              width={660}
              height={440}
            />
          </AnimatedImage>
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
