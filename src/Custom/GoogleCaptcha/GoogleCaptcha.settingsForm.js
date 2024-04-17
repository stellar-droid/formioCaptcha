import baseEditForm from "formiojs/components/_classes/component/Component.form";

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "display",
        components: [
          {
            // You can ignore existing fields.
            key: "placeholder",
            ignore: true
          }
        ]
      },
      {
        key: "data",
        components: [{
          key: "defaultValue",
          ignore: true,
          value:"TestingData"
        },
          {
            type: "textfield",
            input: true,
            label: "Api Key",  
            weight: 12,
            key: "apiCustomKey", // This will be available as component.myCustomDataSetting
            tooltip: "Enter the API Key for Google Captcha",
          }
      ]
      },
      {
        key: "validation",
        components: []
      },
      {
        key: "api",
        components: []
      },
      {
        key: "conditional",
        components: []
      },
      {
        key: "logic",
        components: []
      }
    ],
    ...extend
  );
};
