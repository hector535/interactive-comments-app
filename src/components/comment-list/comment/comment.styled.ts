import styled from "styled-components";

export const Container = styled.article`
  --padding-container: 1rem;
  padding: var(--padding-container);
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;

  > div:first-child,
  > button:nth-of-type(1),
  > button:nth-of-type(2) {
    position: absolute;
  }

  /*Vote Component*/
  > div:first-child {
    left: var(--padding-container);
    bottom: var(--padding-container);
  }

  > button:nth-of-type(1),
  > button:nth-of-type(2) {
    bottom: calc(var(--padding-container) + 6px);
  }

  /* Reply button */
  > button:nth-of-type(1) {
    right: var(--padding-container);
  }

  /* Delete button */
  > button:nth-of-type(2) {
    right: calc(var(--padding-container) + 65px);
  }

  .comment__content {
    display: grid;
    gap: 1rem;
    margin-bottom: 3.5rem;
  }

  .comment__header {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .comment__author {
    font-weight: 500;
    color: #334253;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .comment__author span {
    padding: 2px 8px;
    border-radius: 2px;
    font-weight: 500;
    font-size: 13px;
    color: #fff;
    background-color: #5357b6;
  }

  .comment__date {
    color: #67727e;
  }

  .comment__description span {
    font-weight: 500;
    color: #5357b6;
  }

  @media (min-width: 75em) {
    --padding-container: 1.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;

    > div:first-child,
    > button:nth-of-type(1),
    > button:nth-of-type(2) {
      bottom: initial;
    }

    /*Vote Component*/
    > div:first-child {
      position: initial;
      top: initial;
      align-items: initial;

      width: 50px;
      height: 100px;

      padding: 0.75rem 1rem;

      display: grid;
      align-self: start;
      gap: 0.8rem;
      justify-content: center;
      justify-items: center;
    }

    > button:nth-of-type(1),
    > button:nth-of-type(2) {
      top: calc(var(--padding-container) + 6px);
    }

    .comment__content {
      margin-bottom: initial;
    }
  }
`;
