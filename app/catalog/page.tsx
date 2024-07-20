import ProductPage from '@/components/templates/ProductsPage/ProductsPage'
import { SearchParams } from '@/types/catalog'

export default function Catalog({ searchParams, }: { searchParams?: SearchParams }) {
  return <ProductPage searchParams={searchParams || {}} pageName='catalog' />
}
