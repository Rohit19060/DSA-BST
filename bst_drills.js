const BinarySearchTree = require("./BinarySearchTree");

// Sample BST Tree
function bstSample() {
  const BST = new BinarySearchTree();
  const num = [3, 1, 4, 6, 9, 2, 5, 7];
  num.forEach((element) => BST.insert(element));
  return BST;
}
// console.log(bstSample());

// 4. What does this program do?
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}
// Returns the total node values of a input tree recursively
// Runtime of the algorithm is O(log n)

// 5. Height of a BST
// The time complexity of this algorithm is linear O(n)
const bstHeight = (bst, height = 0) => {
  // If BST is empty
  if (bst === null) {
    return 0;
  } else {
    let heightL = bstHeight(bst.left);
    let heightR = bstHeight(bst.right);
    // Return the greatest height plus 1 for the root node
    if (heightL > heightR) {
      return heightL + 1;
    } else {
      return heightR + 1;
    }
  }
};
// console.log(bstHeight(bstSample()));

// 6. Is it a BST?
const isBst = (bst) => {
  if (!bst.left && !bst.right) {
    return true;
  }
  if (bst.left) {
    if (bst.left.value >= bst.value) {
      return false;
    }
    isBst(bst.left);
  }
  if (bst.right) {
    if (bst.right.value <= bst.value) {
      return false;
    }
    isBst(bst.right);
  }
  return true;
};
// console.log(isBst(bstSample()));

// 7. 3rd largest node
const thirdLargestN = (tree) => {
  const height = bstHeight(tree);
  if (height < 2) {
    return null;
  } else if (height < 3) {
    if (tree.left && tree.right) {
      return tree.left.value;
    } else {
      return null;
    }
  } else if (height > 3) {
    return thirdLargestN(tree.right);
  } else {
    return tree.key;
  }
};
// console.log(thirdLargestN(bstSample()));

// 8. Balanced BST
const isBalanced = (tree) => {
  if (!tree) {
    return false;
  }
  if (!tree.right && !tree.left) {
    return true;
  }
  if (Math.abs(bstHeight(tree.right) - bstHeight(tree.left)) > 1) {
    return false;
  }
  return true;
};

// console.log(isBalanced(bstSample()));

// 9. Are they the same BSTs?

const isSameBST = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  if (array1.length === 0) {
    return true;
  }
  if (array1[0] !== array2[0]) {
    return false;
  }
  let leftArray1 = array1.filter((i) => i < array1[0]);
  let rightArray1 = array1.filter((i) => i > array1[0]);
  let leftArray2 = array2.filter((i) => i < array2[0]);
  let rightArray2 = array2.filter((i) => i > array2[0]);
  return !isSameBST(leftArray1, leftArray2)
    ? false
    : isSameBST(rightArray1, rightArray2)
    ? true
    : false;
};

const nums1 = [3, 5, 4, 6, 1, 0, 2];
const nums2 = [3, 1, 5, 2, 4, 6, 0];
const nums3 = [3, 1, 4, 6, 0, 2, 5];

// console.log(isSameBST(nums1, nums2));
// console.log(isSameBST(nums2, nums3));
