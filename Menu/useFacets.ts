import { gql } from '@faststore/graphql-utils'
import type { StoreSort } from '@faststore/api'

import { useQuery } from 'src/sdk/graphql/useQuery'
import type {
  ProductGalleryQueryCustomQuery as Query,
  ProductGalleryQueryCustomQueryVariables as Variables,
} from '@generated/graphql'
import { useSession } from 'src/sdk/session'

/**
 * This query is run on the browser and contains
 * the current search state of the user
 */
export const query = gql`
  query ProductGalleryQueryCustom(
    $first: Int!
    $after: String!
    $sort: StoreSort!
    $term: String!
    $selectedFacets: [IStoreSelectedFacet!]!
  ) {
    search(
      first: $first
      after: $after
      sort: $sort
      term: $term
      selectedFacets: $selectedFacets
    ) {
      facets {
        ... on StoreFacetBoolean {
          __typename
          key
          label
          values {
            label
            quantity
            selected
            value
          }
        }
      }
    }
  }
`

interface UseFacetsQueryProps {
  categoryName: string
  first?: number
  sort?: StoreSort
}

export const useFacetsQuery = ({
  categoryName,
  first = 50,
  sort = 'score_desc' as StoreSort,
}: UseFacetsQueryProps) => {
  const session = useSession()

  const variables = {
    after: '0',
    first,
    selectedFacets: [
      {
        key: 'category-1',
        value: categoryName,
      },
      {
        key: 'channel',
        value: session.channel ?? '',
      },
      {
        key: 'locale',
        value: session.locale,
      },
    ],
    sort,
    term: '',
  }

  return useQuery<Query, Variables>(query, variables)
}
