#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting file copy process...${NC}"

# Create public directory if it doesn't exist
if [ ! -d "public" ]; then
  echo -e "${YELLOW}Creating public directory...${NC}"
  mkdir -p public/packages
fi

# Copy ONNX Runtime WASM files
echo -e "${YELLOW}Copying ONNX Runtime WASM files...${NC}"
cp node_modules/onnxruntime-web/dist/*.wasm public/packages/ 2>/dev/null || echo "No WASM files found"

# Copy VAD worklet bundle
echo -e "${YELLOW}Copying VAD worklet bundle...${NC}"
cp node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js public/packages/ 2>/dev/null || echo "No VAD worklet bundle found"

# Copy ONNX model files
echo -e "${YELLOW}Copying ONNX model files...${NC}"
cp node_modules/@ricky0123/vad-web/dist/*.onnx public/packages/ 2>/dev/null || echo "No ONNX files found"

# Copy ONNX Runtime MJS files
echo -e "${YELLOW}Copying ONNX Runtime MJS files...${NC}"
cp node_modules/onnxruntime-web/dist/*.mjs public/packages/ 2>/dev/null || echo "No MJS files found"

echo -e "${GREEN}File copy process completed!${NC}"

# List copied files
echo -e "${YELLOW}Files copied to public directory:${NC}"
ls -la public/packages/*.wasm public/packages/*.js public/packages/*.onnx public/packages/*.mjs 2>/dev/null || echo "No files were copied"
