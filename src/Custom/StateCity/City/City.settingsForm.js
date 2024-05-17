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
            // type: "checkbox",
            // input: true,
            // label: "Multiple Values",
            // weight: 10, // Set weight higher to ensure it appears after the "Site Key".
            // key: "multiple",
            // tooltip: "Enable if you want to allow multiple values.",
            key: "multiple",
            ignore: true,
            position: "end",
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
