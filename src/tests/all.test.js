import UnitTests from './Unit'

import { consoleControl } from './settings'

beforeEach(consoleControl)
afterEach(consoleControl)

describe('All tests', () => {
    describe('Unit tests', UnitTests)
})
