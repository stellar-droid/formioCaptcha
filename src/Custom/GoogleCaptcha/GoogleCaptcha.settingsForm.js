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
        components: [
          {
            type: "textfield",
            input: true,
            label: "Site Key",
            weight: 0,
            key: "apiCustomKey", // This will be available as component.apiCustomKey
            tooltip: "Enter the Site Key for Google Captcha .You can get the Site Key from Google Captcha Admin Console  <a href='http://lnkiy.in/google_v3_console' target='_blank'>Google v3 Console</a>",
            validate: {
              required: true
            },
            
          },
          
          {
            // type: "checkbox",
            // input: true,
            // label: "Multiple Values",
            // weight: 10, // Set weight higher to ensure it appears after the "Site Key".
            // key: "multiple",
            // tooltip: "Enable if you want to allow multiple values.",
            key:"multiple",
            ignore:true,
            position:"end",
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
