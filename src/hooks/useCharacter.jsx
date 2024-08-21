import {gql} from "@apollo/client"

const GET_CHARACTERS = gql`
query GetCharacter() {
    character($id: ID!) {
        name
        id
        image
        episode{
            name
            episode
        }
    }
}

`;