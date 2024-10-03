/* eslint-disable react/jsx-no-undef */
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  TitleDescriptionWithImageDataFragmentDoc,
  type TitleDescriptionWithImageDataFragment,
} from "@/gql/graphql";

export const TitleDescriptionWithImage: CmsComponent<
  TitleDescriptionWithImageDataFragment
> = ({ data: { Title = "", Description = { json: null } }, inEditMode }) => {
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
