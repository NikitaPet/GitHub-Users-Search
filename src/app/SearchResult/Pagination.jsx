import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { createTheme, ThemeProvider } from '@mui/material/styles'

export default ({
    setting: { pageNum, setPageNum, itemPerPage, resultCount },
}) => {
    const pageMax = 100
    const pagesNum = Math.floor(resultCount / itemPerPage) + 1
    const shownPagesNum = pagesNum > pageMax ? pageMax : pagesNum
    const handleChange = (event, value) => setPageNum(value)

    return (
        <ThemeProvider theme={theme}>
            <Stack>
                <Pagination
                    count={shownPagesNum}
                    page={pageNum}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    size="large"
                    boundaryCount={2}
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </ThemeProvider>
    )
}

const theme = createTheme({
    palette: {
        text: { primary: 'white' },
    },
})
