import "server-only";
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  ButtonBlockPropertyDataFragment,
  type TitleDescriptionWithImageElementDataFragment,
  TitleDescriptionWithImageElementDataFragmentDoc,
} from "@/gql/graphql";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { CmsImage } from "@/components/shared/cms_image";
import ButtonBlock from "../../block/button_block";

export const TitleDescriptionWithImageElement: CmsComponent<
  TitleDescriptionWithImageElementDataFragment
> = ({
  data: { Title, Thumbnail, Content = { json: null }, Link: Link },
  contentLink,
  layoutProps,
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
        {(Content || inEditMode) && (
          <CmsEditable
            as={RichText}
            cmsFieldName="Description"
            text={Content?.json}
          />
        )}

        {(Thumbnail || inEditMode) && (
          <CmsImage
            src={Thumbnail}
            alt="Hero image"
            className="object-cover not-prose"
            height="500"
            width="500"
          />
        )}

        {
          <CmsEditable
            as={ButtonBlock}
            cmsFieldName="Link"
            contentLink={{ key: null }}
            data={{
              ...Link,
              __typename: undefined, // Remove data type, so only data fields will be matched
              " $fragmentName": undefined, // Remove fragment source, so only data fields will be matched
              className:
                `${
                  (Link as ButtonBlockPropertyDataFragment | undefined | null)
                    ?.className ?? ""
                }`.trim() || undefined, // Apply additional classes
            }}
          />
        }
      </div>
    </section>
  );
};

TitleDescriptionWithImageElement.displayName =
  "TitleDescriptionWithImageElementComponent";
TitleDescriptionWithImageElement.getDataFragment = () => [
  "TitleDescriptionWithImageElementData",
  TitleDescriptionWithImageElementDataFragmentDoc,
];

export default TitleDescriptionWithImageElement;
