import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledSortBy = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Select = styled.select`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
  }
`;

function SortBy({ options = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSortBy>
      <Select value={sortBy} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </StyledSortBy>
  );
}

export default SortBy;
