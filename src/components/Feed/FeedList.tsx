import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Column from '../Column'
import FeedItem from './FeedItem'
import { FeedData, UserData } from './types.d'

const FeedListContainer = styled.div``

const ListEmpty = styled(Column)`
  margin: 2rem 0;
  align-items: center;

  > p,
  > svg {
    line-height: 2;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.text4};
  }
`

interface FeedListProps {
  feedList: FeedData[]
  userInfo: UserData
}

const FeedListView = ({
  feedList,
  userInfo,
}: FeedListProps) => {
  const [selectedIndex, setSelectedIndex] = useState<string[]>([])

  const handleSelectItem = useCallback((itemId: string) => {
    const existingIndex = selectedIndex.findIndex(item => item === itemId)
    existingIndex >= 0 ? selectedIndex.splice(existingIndex, 1) : selectedIndex.push(itemId)
    setSelectedIndex(arr => [...arr])
  }, [selectedIndex, setSelectedIndex])

  return (
    <FeedListContainer>
      {feedList && feedList.length ? feedList.map((feedItem: FeedData, index: number) => (
        <FeedItem
          key={index}
          feedItem={feedItem}
          userInfo={userInfo}
          selected={selectedIndex.includes(feedItem.id)}
          onSelect={() => handleSelectItem(feedItem.id)}
        />
      )) : (
        <ListEmpty>
          <p>暂无信息</p>
        </ListEmpty>
      )}
    </FeedListContainer>
  )
}

export default FeedListView
