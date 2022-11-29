import styled from 'styled-components'
import Image from 'next/image'

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`

export const MenuItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  > span {
    width: 50px !important;
    border-radius: ${({ theme }) => theme.border.radius.rounded};
    box-shadow: ${({ theme }) => theme.shadows.default.s3};
  }
`

export const Img = styled.img`
  width: 50px;
  height: auto;
`

export const MenuItemImage = styled(Image)`
  width: 70px;
`

export const MenuItemName = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`
