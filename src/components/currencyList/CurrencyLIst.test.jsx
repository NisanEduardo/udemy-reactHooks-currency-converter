import { render } from '@testing-library/react'
import { CurrencyList } from './CurrencyList'

describe('currency list test scope', () => {
  test('should render component without errors', () => {
    render(<CurrencyList/>)
  })
})