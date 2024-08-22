import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query GetBlogs($organizationId: ID!) {
    blogs(organizationId: $organizationId) {
      content
      createdAt
      id
      organizationId
      status
      title
      updatedAt
      userId
    }
  }
`;

export const ADD_BLOG = gql`
  mutation CreateBlog($blogInfo: BlogInput!) {
    createBlog(input: { blogInfo: $blogInfo }) {
      blog {
        id
        title
        content
        status
        organizationId
        userId
        createdAt
        updatedAt
      }
    }
  }
`;
