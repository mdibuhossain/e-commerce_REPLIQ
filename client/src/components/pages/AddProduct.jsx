import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const AddProduct = () => {
  return (
    <div className=" flex justify-center  m-auto">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add product
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Title" />
            <Input size="lg" label="Category" />
            <Input size="lg" label="price" />
            <Input size="lg" label="Description" />
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full"
            />
          </div>

          <Button className="mt-6" fullWidth>
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
