import { Simple } from "../emails/mjml/Simple";

export default {
  preview: () => (
    <Simple
      headline="Welcome home!"
      name="Elly"
      body="What you are seeing here, is the first ever preview made with `@postbote/cli` and `@postbote/mjml-react` (the successor of `mjml-react`)"
    />
  ),
};
