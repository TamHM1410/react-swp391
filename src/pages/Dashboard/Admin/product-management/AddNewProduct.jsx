import { useState } from "react";
import AddNewModal from "../../../../components/Modal";
const AddNewProdcuct = () => {
  const [modalId, setModalId] = useState("add_new_product_modal");

  return (
    <>
      <div>
        <AddNewModal
          modalId={modalId}
          name="Add product information"
          title="Add new product"
          type="add"
        />
      </div>
    </>
  );
};
export default AddNewProdcuct;
