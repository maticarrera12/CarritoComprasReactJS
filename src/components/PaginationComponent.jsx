import { Pagination } from "@mui/material"
import '../styles/PaginationComponent.css'

export const PaginationComponent = ({count,page,onChange}) => {
  return (
    <>
    <div className="pagination">
    <Pagination count={count} page={page} onChange={onChange} color="primary" showFirstButton showLastButton/>
    </div>
    </>
  )
}
