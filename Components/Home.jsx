
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import OnSaleProducts from "./Products/OnSaleProducts";
import Completesets from "./Products/Completesets";
import TrendingProducts from "./Products/TrendingProducts";
import Categories from "./Categories/Categories";
import ImageSlider from "./Sliders/Slider";
import UserNameDisplay from "./User/UserNameDisplay";
import BrandSlider from "./Sliders/BrandSlider";
import CustomerSupportoptions from "./User/CustomerSupportoptions";
import Loader from "./Loader/Loader";
import staticData from "../src/data.json";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [homeData, setHomeData] = useState({
    sliderData: [],
    categoryData: [],
    brandData: [],
    onSaleProducts: [],
    trendingProducts: [],
    completeSets: [],
    firstColumnData: [],
    secondColumnData: [],
  });

  useEffect(() => {
    if (navigation) {
      navigation.setOptions({ headerShown: false });
    }
  }, []);

  const fetchData = async () => {
    try {
      // Simulate network delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      setHomeData(staticData);
    } catch (error) {
      console.error("Home data error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <Loader />
      </View>
    );
  }

  const sections = [
    { key: "user", render: () => <UserNameDisplay /> },
    { key: "slider", render: () => <ImageSlider sliderData={homeData.sliderData} /> },
    { key: "categories", render: () => <Categories categoriesData={homeData.categoryData} /> },
    { key: "onSale", render: () => <OnSaleProducts products={homeData.onSaleProducts} /> },
    { key: "brands", render: () => <BrandSlider brands={homeData.brandData} /> },
    {
      key: "trending",
      render: () => (
        <>
          <Text style={styles.sectionTitle}>Trending Products</Text>
          <TrendingProducts products={homeData.trendingProducts} />
        </>
      ),
    },
    {
      key: "completeSets",
      render: () => <Completesets sets={homeData.completeSets} />,
    },
    {
      key: "support",
      render: () => (
        <CustomerSupportoptions
          firstColumnData={homeData.firstColumnData}
          secondColumnData={homeData.secondColumnData}
        />
      ),
    },
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => <View>{item.render()}</View>}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      initialNumToRender={2}
      windowSize={5}
      maxToRenderPerBatch={3}
      updateCellsBatchingPeriod={100}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    paddingBottom: 120,
    backgroundColor: "#F8F9FA",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#1A1A1A",
  },
});

export default HomeScreen;
