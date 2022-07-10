/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        user_image
        point
        old
        stocks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
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
export const listStocks = /* GraphQL */ `
  query ListStocks($filter: ModelStockFilterInput, $limit: Int, $nextToken: String) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        ticket_id
        plan_id
        status
        people
        stock_details {
          nextToken
        }
        tickets {
          nextToken
        }
        recommend_plans {
          nextToken
        }
        stock_coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStockDetail = /* GraphQL */ `
  query GetStockDetail($id: ID!) {
    getStockDetail(id: $id) {
      id
      detail_num
      people
      mission_id
      createdAt
      updatedAt
    }
  }
`;
export const listStockDetails = /* GraphQL */ `
  query ListStockDetails($filter: ModelStockDetailFilterInput, $limit: Int, $nextToken: String) {
    listStockDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getStockCoupon = /* GraphQL */ `
  query GetStockCoupon($id: ID!) {
    getStockCoupon(id: $id) {
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
export const listStockCoupons = /* GraphQL */ `
  query ListStockCoupons($filter: ModelStockCouponFilterInput, $limit: Int, $nextToken: String) {
    listStockCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
      id
      ticket
      ratio
      createdAt
      updatedAt
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets($filter: ModelTicketFilterInput, $limit: Int, $nextToken: String) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ticket
        ratio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecommendPlan = /* GraphQL */ `
  query GetRecommendPlan($id: ID!) {
    getRecommendPlan(id: $id) {
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
export const listRecommendPlans = /* GraphQL */ `
  query ListRecommendPlans($filter: ModelRecommendPlanFilterInput, $limit: Int, $nextToken: String) {
    listRecommendPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        prefecture_id
        content
        prefecture {
          nextToken
        }
        roots {
          nextToken
        }
        missions {
          nextToken
        }
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrefecture = /* GraphQL */ `
  query GetPrefecture($id: ID!) {
    getPrefecture(id: $id) {
      id
      prefecture
      createdAt
      updatedAt
    }
  }
`;
export const listPrefectures = /* GraphQL */ `
  query ListPrefectures($filter: ModelPrefectureFilterInput, $limit: Int, $nextToken: String) {
    listPrefectures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        prefecture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoot = /* GraphQL */ `
  query GetRoot($id: ID!) {
    getRoot(id: $id) {
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
export const listRoots = /* GraphQL */ `
  query ListRoots($filter: ModelRootFilterInput, $limit: Int, $nextToken: String) {
    listRoots(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMission = /* GraphQL */ `
  query GetMission($id: ID!) {
    getMission(id: $id) {
      id
      plan_id
      contents
      createdAt
      updatedAt
    }
  }
`;
export const listMissions = /* GraphQL */ `
  query ListMissions($filter: ModelMissionFilterInput, $limit: Int, $nextToken: String) {
    listMissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        plan_id
        contents
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
      id
      plan_id
      contents
      discount
      createdAt
      updatedAt
    }
  }
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons($filter: ModelCouponFilterInput, $limit: Int, $nextToken: String) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;

// export const getUserStock = /* GraphQL */ `
//   query GetUserStock($user_id: ID!) {
//       getStock(user_id: $user_id) {
//           id
//           user_id
//           ticket_id
//           plan_id
//           status
//           people
//       }
//   }
// `
