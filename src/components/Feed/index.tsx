import styled from 'styled-components'
import { Box } from 'rebass'
import { lighten } from 'polished'
import FeedList from './FeedList'
import { ButtonEmpty } from '../../components/Button'
import { FeedData, UserData } from './types.d'

const PageCoitainer = styled(Box)`
  display: flex;
`

const FeedCoitainer = styled.div`
  flex: 2;
  margin-right: 220px;
  padding-right: 2rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-right: 0;
    padding-right: 0;
  `}
`

const SidebarCoitainer = styled.div`
  position: fixed;
  top: 8rem;
  left: calc(50vw + 280px);
  width: 180px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.bg1};

    > button {
      margin: .5rem;
    }
  `}
`

const SidebarButton = styled(ButtonEmpty)`
  margin-bottom: 2rem;
  box-shadow: 0 5px 12px 0 ${({ theme }) => lighten(0.15, theme.text4)};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary1};
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.primary1};
    color: ${({ theme }) => theme.white};
  }

  > span {
    margin-right: .5rem;
  }

  > i {
    font-size: 20px;
  }
`

interface FeedProps {
  feedList: FeedData[]
  userInfo: UserData
}

const Feed = ({
  feedList,
  userInfo,
}: FeedProps) => {

  return (
    <PageCoitainer>
      <FeedCoitainer>
        <FeedList
          feedList={feedList}
          userInfo={userInfo}
        />
      </FeedCoitainer>
      <SidebarCoitainer>
        <SidebarButton
          borderRadius="10rem"
        >
          <span>备份已选</span>
          <i className="iconfont">&#xe6cc;</i>
        </SidebarButton>
        <SidebarButton
          borderRadius="10rem"
        >
          <span>备份全部</span>
          <i className="iconfont">&#xe6e8;</i>
        </SidebarButton>
      </SidebarCoitainer>
    </PageCoitainer>
  )
}

export default Feed
