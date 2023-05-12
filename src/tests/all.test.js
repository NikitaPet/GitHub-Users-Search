import UnitTests from './UnitTests'

import { consoleControl } from './config'

beforeEach(consoleControl)
afterEach(consoleControl)

describe('All tests', () => {
    describe('Unit-tests', UnitTests)
})
