import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ListRenderItemInfo } from "react-native";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { OrderCard } from "../OrderCard";
import * as Fonts from "../../../styles/Fonts";

import {styles} from './styles'
import {propsType} from './types'
import Order from "../../../entities/Order";
import { Icon } from "../../ThemeComponents/Icon";
import { CustomAlert } from "../../SharedComponents/Alert";
import { MainColors } from "../../../styles/Colors";

export const OrderList = (data: propsType) => {
  const [listData, setListData] = useState<{ order: Order; key: string }[]>([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [orderToDeleteKey, setOrderToDeleteKey] = useState('');
  const [orderRowMap, setOrderRowMap] = useState<RowMap<{ order: Order; key: string }> | undefined>(undefined);
  useEffect(() => {
    if (data.orders) {
      setListData(
        data.orders.map((order, index) => {
          return { order: order, key: `${index}` };
        })
      );
    }
  }, [data.orders]);

  const closeRow = (
    rowMap: { [x: string]: { closeRow: () => void } } | undefined,
    rowKey: string | number
  ) => {
    if ( rowMap && rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (
    rowMap: RowMap<{ order: Order; key: string }> | undefined,
    rowKey: string
  ) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    data.deleteOrder(listData[prevIndex].order.id);
    if (prevIndex !== -1) newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const renderItem = (
    data: ListRenderItemInfo<{ order: Order; key: string }>
  ) => <OrderCard order={data.item.order} />;

  const renderHiddenItem = (
    data: ListRenderItemInfo<{ order: Order; key: string }>,
    rowMap: RowMap<{ order: Order; key: string }> 
  ) => (
    <TouchableOpacity
      style={[styles.backLeftBtn, styles.backRightBtnRight]}
      onPress={() => {
        setIsAlertVisible(true);
        setOrderRowMap(rowMap);
        setOrderToDeleteKey(data.item.key);
      }}
    >
      <Icon  size="small" iconPath={require('../../../assets/icons/small_icons/cancel.png')}/>
      <Text style={styles.backTextWhite}>Cancel</Text>
    </TouchableOpacity>
  );

  if (listData.length) {
    return (
      <View style={styles.container}>
        <CustomAlert
          title="Are You Sure?"
          description="Do you want to cancel your request"
          isVisible={isAlertVisible}
          setIsAlertVisible={(visible: boolean) =>
            setIsAlertVisible(visible)
          }
          type="confirm"
          callableFunction={() => deleteRow(orderRowMap, orderToDeleteKey)}
        />
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          disableLeftSwipe={true}
          previewRowKey={"0"}
          previewOpenValue={-0}
          previewOpenDelay={300}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ paddingVertical: 5, backgroundColor: MainColors.Natural }} />
          )}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text style={[{ flex: 1 }, Fonts.FontStyles.SmallText]}>
          No Orders Exist
        </Text>
      </View>
    );
  }
};
