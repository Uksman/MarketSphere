import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";

const AddPostScreen = () => {
  const db = getFirestore(app);

  const [categoryList, setCategorylist] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, "Category"));

    querySnapshot.forEach((doc) => {
      console.log("Docs:", doc.data());
      setCategorylist((categoryList) => [...categoryList, doc.data()]);
    });
  };

  return (
    <View className="p-10">
      <Formik
        initialValues={{
          name: "",
          desc: "",
          image: "",
          category: "",
          address: "",
        }}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder="Title"
              value={values?.tittle}
              onChangeText={handleChange("Title")}
              className="border p-4 rounded-2xl px-5 mb-5 text-sm"
            />
            <TextInput
              placeholder="Description"
              value={values?.desc}
              numberOfLines={5}
              onChangeText={handleChange("desc")}
              className="border p-4 rounded-2xl px-5 mb-5 text-sm"
            />
            <TextInput
              placeholder="Price"
              value={values?.Price}
              keyboardType="number-pad"
              onChangeText={handleChange("Price")}
              className="border p-4 rounded-2xl px-5 text-sm"
            />

            <Picker
              selectedValue={values?.category}
              onValueChange={handleChange("category")}
            >
              <Picker.Item label="Dropdown1" value={"dropdown"} />
              <Picker.Item label="Dropdown2" value={"dropdown"} />
            </Picker>
            <TouchableOpacity
              className="mt-7 rounded-2xl bg-orange-500 p-5"
              onPress={handleSubmit}
            >
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddPostScreen;
