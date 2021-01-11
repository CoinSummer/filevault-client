import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass/styled-components'
import Column from '../Column'
import Row from '../Row'
import { FeedData, UserData } from './types.d'

const FeedItemContainer = styled(Row)`
  margin-top: 1rem;
`

const FeedItemContent = styled(Row)`
  align-items: flex-start;
  padding: .875rem;
  background-color: ${({ theme }) => theme.bg1};
`

const FeedItemAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const FeedItemInfo = styled(Column)`
  margin-left: .5rem;
`

const FeedItemHead = styled(Row)`
`

const FeedItemName = styled.div`
  font-weight: 500;
`

const FeedItemTime = styled(Text)`
  margin-left: .25rem;
  color: ${({ theme }) => theme.text3};
  font-size: 0.875rem;

  &:before {
    margin-right: .25rem;
    content: '·';
  }
`

const FeedItemBody = styled.div`
  margin-top: .25rem;
  color: ${({ theme }) => theme.text1};
  font-size: 0.875rem;
  word-break: break-word;
`

const FeedItemSelect = styled.a`
  padding: .5rem;
  width: 100px;
  text-align: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 60px;
  `}

  > i {
    font-size: 36px;
    color: ${({ theme }) => theme.primaryText1};
  }
`

interface FeedItemProps {
  feedItem: FeedData
  userInfo: UserData
  selected: boolean
  onSelect: () => void
}

const FeedItemView = ({
  feedItem,
  userInfo,
  selected,
  onSelect,
}: FeedItemProps) => {
  return (
    <FeedItemContainer>
      <>
        <FeedItemContent>
          <FeedItemAvatar
            src={userInfo.avatar}
          />
          <FeedItemInfo>
            <FeedItemHead>
              <FeedItemName>
                {userInfo.name}
              </FeedItemName>
              <FeedItemTime>
                {feedItem.created_at}
              </FeedItemTime>
            </FeedItemHead>
            <FeedItemBody>
              {feedItem.text}
            </FeedItemBody>
          </FeedItemInfo>
        </FeedItemContent>
        <FeedItemSelect
          onClick={onSelect}
        >
          {selected ? (
            <i className="iconfont">&#xe68b;</i>
          ) : (
            <i className="iconfont">&#xe67f;</i>
          )}
        </FeedItemSelect>
      </>
    </FeedItemContainer>
  )
}

export default FeedItemView
