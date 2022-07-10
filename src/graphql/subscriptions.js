/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      user_image
      point
      old
      stocks {
        items {
          id
          user_id
          ticket_id
          plan_id
          status
          people
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      user_image
      point
      old
      stocks {
        items {
          id
          user_id
          ticket_id
          plan_id
          status
          people
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      user_image
      point
      old
      stocks {
        items {
          id
          user_id
          ticket_id
          plan_id
          status
          people
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock {
    onCreateStock {
      id
      user_id
      ticket_id
      plan_id
      status
      people
      stock_details {
        items {
          id
          detail_num
          people
          mission_id
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          ticket
          ratio
          createdAt
          updatedAt
        }
        nextToken
      }
      recommend_plans {
        items {
          id
          prefecture_id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      stock_coupons {
        items {
          id
          detail_num
          people
          coupon_id
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock {
    onUpdateStock {
      id
      user_id
      ticket_id
      plan_id
      status
      people
      stock_details {
        items {
          id
          detail_num
          people
          mission_id
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          ticket
          ratio
          createdAt
          updatedAt
        }
        nextToken
      }
      recommend_plans {
        items {
          id
          prefecture_id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      stock_coupons {
        items {
          id
          detail_num
          people
          coupon_id
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock {
    onDeleteStock {
      id
      user_id
      ticket_id
      plan_id
      status
      people
      stock_details {
        items {
          id
          detail_num
          people
          mission_id
          createdAt
          updatedAt
        }
        nextToken
      }
      tickets {
        items {
          id
          ticket
          ratio
          createdAt
          updatedAt
        }
        nextToken
      }
      recommend_plans {
        items {
          id
          prefecture_id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      stock_coupons {
        items {
          id
          detail_num
          people
          coupon_id
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStockDetail = /* GraphQL */ `
  subscription OnCreateStockDetail {
    onCreateStockDetail {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStockDetail = /* GraphQL */ `
  subscription OnUpdateStockDetail {
    onUpdateStockDetail {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStockDetail = /* GraphQL */ `
  subscription OnDeleteStockDetail {
    onDeleteStockDetail {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStockCoupon = /* GraphQL */ `
  subscription OnCreateStockCoupon {
    onCreateStockCoupon {
      id
      detail_num
      people
      coupon_id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStockCoupon = /* GraphQL */ `
  subscription OnUpdateStockCoupon {
    onUpdateStockCoupon {
      id
      detail_num
      people
      coupon_id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStockCoupon = /* GraphQL */ `
  subscription OnDeleteStockCoupon {
    onDeleteStockCoupon {
      id
      detail_num
      people
      coupon_id
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecommendPlan = /* GraphQL */ `
  subscription OnCreateRecommendPlan {
    onCreateRecommendPlan {
      id
      prefecture_id
      content
      prefecture {
        items {
          id
          prefecture
          createdAt
          updatedAt
        }
        nextToken
      }
      roots {
        items {
          id
          detail_num
          root
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
      missions {
        items {
          id
          plan_id
          contents
          createdAt
          updatedAt
        }
        nextToken
      }
      coupons {
        items {
          id
          plan_id
          contents
          discount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecommendPlan = /* GraphQL */ `
  subscription OnUpdateRecommendPlan {
    onUpdateRecommendPlan {
      id
      prefecture_id
      content
      prefecture {
        items {
          id
          prefecture
          createdAt
          updatedAt
        }
        nextToken
      }
      roots {
        items {
          id
          detail_num
          root
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
      missions {
        items {
          id
          plan_id
          contents
          createdAt
          updatedAt
        }
        nextToken
      }
      coupons {
        items {
          id
          plan_id
          contents
          discount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecommendPlan = /* GraphQL */ `
  subscription OnDeleteRecommendPlan {
    onDeleteRecommendPlan {
      id
      prefecture_id
      content
      prefecture {
        items {
          id
          prefecture
          createdAt
          updatedAt
        }
        nextToken
      }
      roots {
        items {
          id
          detail_num
          root
          latitude
          longitude
          createdAt
          updatedAt
        }
        nextToken
      }
      missions {
        items {
          id
          plan_id
          contents
          createdAt
          updatedAt
        }
        nextToken
      }
      coupons {
        items {
          id
          plan_id
          contents
          discount
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrefecture = /* GraphQL */ `
  subscription OnCreatePrefecture {
    onCreatePrefecture {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrefecture = /* GraphQL */ `
  subscription OnUpdatePrefecture {
    onUpdatePrefecture {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrefecture = /* GraphQL */ `
  subscription OnDeletePrefecture {
    onDeletePrefecture {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoot = /* GraphQL */ `
  subscription OnCreateRoot {
    onCreateRoot {
      id
      detail_num
      root
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoot = /* GraphQL */ `
  subscription OnUpdateRoot {
    onUpdateRoot {
      id
      detail_num
      root
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoot = /* GraphQL */ `
  subscription OnDeleteRoot {
    onDeleteRoot {
      id
      detail_num
      root
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMission = /* GraphQL */ `
  subscription OnCreateMission {
    onCreateMission {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMission = /* GraphQL */ `
  subscription OnUpdateMission {
    onUpdateMission {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMission = /* GraphQL */ `
  subscription OnDeleteMission {
    onDeleteMission {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon {
    onCreateCoupon {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon {
    onUpdateCoupon {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon {
    onDeleteCoupon {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
