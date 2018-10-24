import css from 'styled-jsx/css';

export default css`
  .navbar {
    z-index: 1;
    text-align: center;

    &.is-transparent {
      background: none;
    }

    :global(.navbar-item) {
      padding-left: 20px;
      padding-right: 20px;
      font-family: Poppins;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      color: #595959;
    }

    :global(.navbar-item.active) {
      border-bottom: 4px solid #595959;
    }
  }
`;
