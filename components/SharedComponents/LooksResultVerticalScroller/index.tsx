import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { HomeScreenLoading } from "../../ThemeComponents/Views/LoadingViews";
import { MHorizontalScroller } from "../../HomeScreenComponents";
import { checkConnected } from "../../../utility/CheckConnection";
import { RootState } from "../../../store/configureStore";
import { useSelector } from "react-redux";
import { NoConnection } from "../../ThemeComponents/Views/NoConnectionView";

import { styles } from './styles';
import { componentProps, LOOKS_TO_FETCH_COUNT } from './types'
import Look from "../../../entities/Look";

export const LooksResultVerticalScroller = ({
  data,
  getNextLook,
  refreshLooks,
  addFavorite,
  deleteFavorite,
  navigation,
  setSelectedResultPage
}: componentProps) => {
  const [selectedPage, setSelectedpage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);
  const isEndOfList = useSelector((state: RootState) => state.looks.isEndOfList);
  const wait = (timeout: any) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const CheckConnection = () => {
    checkConnected().then((res: React.SetStateAction<boolean>) => {
      setConnected(res);
      if (!res) return;
    });
    onRefresh();
  };

  useEffect(() => {
    checkConnected().then((res: React.SetStateAction<boolean>) => {
      setConnected(res);
      if (!res) return;
    });
    setLoading(true);
    if (getNextLook) {
      getNextLook(LOOKS_TO_FETCH_COUNT).then(() => {
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    let loadLooksCondition =
      selectedPage == data.length - LOOKS_TO_FETCH_COUNT + 1 ||
      (selectedPage == data.length - 1 && scrollEnd);
    if (!loading && loadLooksCondition && !isEndOfList) {
      setLoading(true);
      setScrollEnd(false);
      if (getNextLook) {
        getNextLook(LOOKS_TO_FETCH_COUNT).then(() => {
          setLoading(false);
        });
      }
    }
  }, [data, selectedPage, loading === true]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setLoading(true);
    await refreshLooks();
    if (getNextLook) {
      await getNextLook(LOOKS_TO_FETCH_COUNT);
    }
    setLoading(false);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const onScrollEnd = (e: any) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    let pageNum = Math.floor(contentOffset.y / viewSize.height);
    setSelectedpage(pageNum);
    if (setSelectedResultPage) {
      setSelectedResultPage(pageNum);
    }
    setScrollEnd(true);
  }

  const renderItem = ({ item, index }: { item: Look, index: number }) => {
    return (
      <View testID="horizontalScroller">
        <MHorizontalScroller
          look={item}
          addFavorite={addFavorite}
          deleteFavorite={deleteFavorite}
          navigation={navigation}
          index={index}
          pageNumSelected={selectedPage}
        />
        {loading && index == data.length - 1 ? (
          <View testID="Vsloading" style={styles.view}>
            <HomeScreenLoading />
          </View>
        ) : null}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {!connected ? (
        <NoConnection onCheck={CheckConnection} />
      ) : loading && !data.length ? (
        <View style={styles.view}>
          <HomeScreenLoading />
        </View>
      ) : (
        <FlatList
          testID="looksList"
          data={data}
          keyExtractor={(item, index) => index.toString()}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          onMomentumScrollEnd={onScrollEnd}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};
