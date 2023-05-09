import React from "react";
import { MDBCard, MDBCardBody, MDBCol } from "mdb-react-ui-kit";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

function ProductCardSkeleton() {
  return (
    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
      <MDBCard>
        <div className="d-flex justify-content-between p-3">
          <div className="lead mb-0">
            <Skeleton height="10px" width="100px" />
          </div>
          <div
            className="rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: "35px", height: "35px" }}
          >
            <SkeletonCircle size="8" />
          </div>
        </div>
        <Skeleton height="200px" />
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="small mb-4">
              <Skeleton height="10px" width="100px" />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">
              <Skeleton height="20px" width="150px" />
            </h5>
            <h5 className="text-dark mb-0">
              <Skeleton height="20px" width="50px" />
            </h5>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <div className="text-muted mb-0">
              <span className="fw-bold">
                <Skeleton height="10px" width="50px" />
              </span>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProductCardSkeleton;
