import { gql } from "@apollo/client"

export const GET_BLOGS =gql`
    query {
        characters{
            results{
            id
            image
            name
            
            }
        }
    }
`;
