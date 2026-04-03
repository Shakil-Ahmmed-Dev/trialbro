import { createMetadataGenerator } from "tanstack-meta";

export const generateMetadata = createMetadataGenerator({
    titleTemplate: {
        default: "Trial Bro",
        template: (title) => `${title.toUpperCase()} — Trial Bro`,
    },
});