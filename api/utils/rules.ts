const permissions: { permission: string; rule: string[] }[] = [
    {
      permission: 'admin',
      rule: [
        'CREATE-CATEGORY',
        'UPDATE-CATEGORY',
        'DELETE-CATEGORY',
        'LIST-ORDER',
        'LIST-USERS',
        'LIST-USER',
        'DELETE-USER',
        'UPDATE-USER',
      ]
    },
    {
      permission: 'client',
      rule: [
        'CREATE-CONVERSATION',
        'LIST-CONVERSATION',
        'UPDATE-CONVERSATION',
        'LIST-MESSAGE',
        'CREATE-MESSAGE',
        'CREATE-PAYMENT',
        'UPDATE-ORDER',
        'LIST-ORDER',
        'CREATE-RATING',
        'DELETE-RATING',
        'UPDATE-RATING'
      ]
    },
    {
      permission: 'freelancer',
      rule: [
        'CREATE-CONVERSATION',
        'LIST-CONVERSATION',
        'UPDATE-CONVERSATION',
        'LIST-MESSAGE',
        'CREATE-MESSAGE',
        'LIST-ORDER',
        'CREATE-PRODUCT',
        'UPDATE-PRODUCT',
        'DELETE-PRODUCT'
      ]
    }
  ];
  
  export default permissions;
  