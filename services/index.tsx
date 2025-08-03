import request, {gql} from "graphql-request";

export const getCarLists = async () => {
    const query = gql`
        query CarLists {
            products {
                name
                price
                id
                createdAt
                carType
                publishedAt
                updatedAt
                images {
                    url
                }
            }
        }
    `;

    const result = await request('https://ap-south-1.cdn.hygraph.com/content/cmdn8nwp8001n07w8s1qhdabz/master',query);
    return result;
}