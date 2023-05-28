import ViewPager from "@react-native-community/viewpager";
import React, { useState } from "react";
import { View } from "react-native";
import { Sidebar } from "../SideBar";
import { MemoLookMedia } from "../LookMedia";
import Dot from "../../../entities/Dot";

import { componentProps, screenHeight } from "./types";
import { styles } from "./styles";
import { Paginator } from "../../SharedComponents/Paginator";

const HorizontalScroller = ({
  look,
  addFavorite,
  deleteFavorite,
  navigation,
  index,
  pageNumSelected
}: componentProps) => {
  const [selectedPage, setSelectedpage] = useState(0);
  let pageNumber: number = 4;
  let media1: string = look.media1;
  let media2: string = look.media2;
  let media3: string = look.media3;
  let media4: string = look.media4;
  let dots: Dot[] = look.dots;
  let stylistName: string = look.stylist.name;
  let stylistImage: string = look.stylist.image;
  let name: string = look.name;
  let description: string = look.description;
  let media1Dots = [];
  let media2Dots = [];
  let media3Dots = [];
  let media4Dots = [];
  for (let dot of dots) {
    media1Dots.push({ pos: dot.media1Dot, product: dot.product });
    media2Dots.push({ pos: dot.media2Dot, product: dot.product });
    media3Dots.push({ pos: dot.media3Dot, product: dot.product });
    media4Dots.push({ pos: dot.media4Dot, product: dot.product });
  }

  return (
    <View style={{ flex: 1, flexDirection: "column", height: screenHeight }}>
      <Sidebar
        look={look}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
      />
      <Paginator
        curPage={selectedPage}
        maxPages={pageNumber}
      />
      <ViewPager
        style={styles.fullscreen}
        orientation="horizontal"
        onPageSelected={(e) => setSelectedpage(e.nativeEvent.position)}
        initialPage={0}
      >
        <View>
          <MemoLookMedia
            poster={media1}
            username={stylistName}
            image={stylistImage}
            description={description}
            title={name}
            dots={media1Dots}
            firstMedia={true}
            navigation={navigation}
            index={index}
            pageNumSelected={pageNumSelected}
          />
        </View>
        <View>
          <MemoLookMedia
            poster={media2}
            username={stylistName}
            description={description}
            image={stylistImage}
            title={name}
            dots={media2Dots}
            firstMedia={false}
            navigation={navigation}
          />
        </View>
        <View>
          <MemoLookMedia
            poster={media3}
            username={stylistName}
            description={description}
            title={name}
            dots={media3Dots}
            image={stylistImage}
            firstMedia={false}
            navigation={navigation}
          />
        </View>
        <View>
          <MemoLookMedia
            poster={media4}
            username={stylistName}
            description={description}
            image={stylistImage}
            title={name}
            dots={media4Dots}
            firstMedia={false}
            navigation={navigation}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export const MHorizontalScroller = React.memo(HorizontalScroller);
