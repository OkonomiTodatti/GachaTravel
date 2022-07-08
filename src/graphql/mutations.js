/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
    deleteUser(input: $input, condition: $condition) {
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
export const createStock = /* GraphQL */ `
  mutation CreateStock($input: CreateStockInput!, $condition: ModelStockConditionInput) {
    createStock(input: $input, condition: $condition) {
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
export const updateStock = /* GraphQL */ `
  mutation UpdateStock($input: UpdateStockInput!, $condition: ModelStockConditionInput) {
    updateStock(input: $input, condition: $condition) {
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
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock($input: DeleteStockInput!, $condition: ModelStockConditionInput) {
    deleteStock(input: $input, condition: $condition) {
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
export const createStockDetail = /* GraphQL */ `
  mutation CreateStockDetail($input: CreateStockDetailInput!, $condition: ModelStockDetailConditionInput) {
    createStockDetail(input: $input, condition: $condition) {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const updateStockDetail = /* GraphQL */ `
  mutation UpdateStockDetail($input: UpdateStockDetailInput!, $condition: ModelStockDetailConditionInput) {
    updateStockDetail(input: $input, condition: $condition) {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteStockDetail = /* GraphQL */ `
  mutation DeleteStockDetail($input: DeleteStockDetailInput!, $condition: ModelStockDetailConditionInput) {
    deleteStockDetail(input: $input, condition: $condition) {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const createStockCoupon = /* GraphQL */ `
  mutation CreateStockCoupon($input: CreateStockCouponInput!, $condition: ModelStockCouponConditionInput) {
    createStockCoupon(input: $input, condition: $condition) {
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
export const updateStockCoupon = /* GraphQL */ `
  mutation UpdateStockCoupon($input: UpdateStockCouponInput!, $condition: ModelStockCouponConditionInput) {
    updateStockCoupon(input: $input, condition: $condition) {
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
export const deleteStockCoupon = /* GraphQL */ `
  mutation DeleteStockCoupon($input: DeleteStockCouponInput!, $condition: ModelStockCouponConditionInput) {
    deleteStockCoupon(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket($input: CreateTicketInput!, $condition: ModelTicketConditionInput) {
    createTicket(input: $input, condition: $condition) {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket($input: UpdateTicketInput!, $condition: ModelTicketConditionInput) {
    updateTicket(input: $input, condition: $condition) {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket($input: DeleteTicketInput!, $condition: ModelTicketConditionInput) {
    deleteTicket(input: $input, condition: $condition) {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const createRecommendPlan = /* GraphQL */ `
  mutation CreateRecommendPlan($input: CreateRecommendPlanInput!, $condition: ModelRecommendPlanConditionInput) {
    createRecommendPlan(input: $input, condition: $condition) {
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
export const updateRecommendPlan = /* GraphQL */ `
  mutation UpdateRecommendPlan($input: UpdateRecommendPlanInput!, $condition: ModelRecommendPlanConditionInput) {
    updateRecommendPlan(input: $input, condition: $condition) {
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
export const deleteRecommendPlan = /* GraphQL */ `
  mutation DeleteRecommendPlan($input: DeleteRecommendPlanInput!, $condition: ModelRecommendPlanConditionInput) {
    deleteRecommendPlan(input: $input, condition: $condition) {
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
export const createPrefecture = /* GraphQL */ `
  mutation CreatePrefecture($input: CreatePrefectureInput!, $condition: ModelPrefectureConditionInput) {
    createPrefecture(input: $input, condition: $condition) {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const updatePrefecture = /* GraphQL */ `
  mutation UpdatePrefecture($input: UpdatePrefectureInput!, $condition: ModelPrefectureConditionInput) {
    updatePrefecture(input: $input, condition: $condition) {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const deletePrefecture = /* GraphQL */ `
  mutation DeletePrefecture($input: DeletePrefectureInput!, $condition: ModelPrefectureConditionInput) {
    deletePrefecture(input: $input, condition: $condition) {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const createRoot = /* GraphQL */ `
  mutation CreateRoot($input: CreateRootInput!, $condition: ModelRootConditionInput) {
    createRoot(input: $input, condition: $condition) {
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
export const updateRoot = /* GraphQL */ `
  mutation UpdateRoot($input: UpdateRootInput!, $condition: ModelRootConditionInput) {
    updateRoot(input: $input, condition: $condition) {
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
export const deleteRoot = /* GraphQL */ `
  mutation DeleteRoot($input: DeleteRootInput!, $condition: ModelRootConditionInput) {
    deleteRoot(input: $input, condition: $condition) {
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
export const createMission = /* GraphQL */ `
  mutation CreateMission($input: CreateMissionInput!, $condition: ModelMissionConditionInput) {
    createMission(input: $input, condition: $condition) {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const updateMission = /* GraphQL */ `
  mutation UpdateMission($input: UpdateMissionInput!, $condition: ModelMissionConditionInput) {
    updateMission(input: $input, condition: $condition) {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const deleteMission = /* GraphQL */ `
  mutation DeleteMission($input: DeleteMissionInput!, $condition: ModelMissionConditionInput) {
    deleteMission(input: $input, condition: $condition) {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon($input: CreateCouponInput!, $condition: ModelCouponConditionInput) {
    createCoupon(input: $input, condition: $condition) {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon($input: UpdateCouponInput!, $condition: ModelCouponConditionInput) {
    updateCoupon(input: $input, condition: $condition) {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon($input: DeleteCouponInput!, $condition: ModelCouponConditionInput) {
    deleteCoupon(input: $input, condition: $condition) {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
