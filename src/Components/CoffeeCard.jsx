import React from "react";
import { GrView } from "react-icons/gr";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, Supplier, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        //   start deleting the coffee.

        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state
              const remainingCoffees = coffees.filter(cof => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });

        // console.log(result.isConfirmed);
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full mt-8 justify-around">
        <div>
          <h2 className="">
            <span className="text-xl font-bold">Name:</span> {name}
          </h2>
          <p>
            <span className="text-xl font-bold">Supplier:</span> {Supplier}
          </p>
          <p>
            <span className="text-xl font-bold">Price:</span> {price} Tk
          </p>
        </div>

        <div className="card-actions ">
          <div className="join join-vertical space-y-2">
            <Link to={`/coffee/${_id}`}>
            <button className="btn join-item bg-amber-300 rounded-xl">
              <GrView />
            </button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn bg-black rounded-xl join-item">
              <MdModeEdit className="bg-white rounded-2xl" />
            </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500 rounded-xl"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
