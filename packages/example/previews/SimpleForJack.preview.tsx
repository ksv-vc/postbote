import { Simple } from "../emails/Simple";

export default {
  preview: () => (
    <Simple
      headline="Welcome home!"
      name="Jack"
      body="What you are seeing here, is the first ever preview made with `@postbote/cli` and `@postbote/mjml-react` (the successor of `mjml-react`). But this one is only for Jack."
    />
  ),
};
