import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import * as Styled from './styles'

import { createTheme, ThemeProvider } from '@mui/material/styles'

export default ({ setting }) => {
    const { pageNum, pagesNum, setPageNum } = setting

    const pageMax = 10
    const shownPagesNum = pagesNum > pageMax ? pageMax : pagesNum
    const handleChange = (event, value) => setPageNum(value)

    return (
        <Styled.Wrapper>
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
        </Styled.Wrapper>
    )
}

const theme = createTheme({
    palette: {
        text: { primary: 'white' },
    },
})
