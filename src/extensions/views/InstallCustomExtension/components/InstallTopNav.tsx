import { TopNav } from "@dashboard/components/AppLayout";
import { ExternalLinkUnstyled } from "@dashboard/extensions/components/ExternalLinkUnstyled/ExternalLinkUnstyled";
import { messages } from "@dashboard/extensions/messages";
import { MANIFEST_FORMAT_DOCS_URL } from "@dashboard/links";
import { FormattedMessage } from "react-intl";

import { previousPagePath } from "../consts";

export const InstallTopNav = ({
  title,
}: {
  title: string;
}) => {
  return (
    <TopNav
      href={previousPagePath}
      __height="auto"
      title={title}
    />
  );
};
