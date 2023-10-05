pages => app
index.js => page.js

`SSR`, `CSR`, `SSG`, và `ISR` là các phương pháp khác nhau để tạo và phục vụ trang web trong Next.js, mỗi cái có cách tiếp cận và ưu điểm riêng. Dưới đây là giải thích về mỗi phương pháp:

1. **SSR (Server-Side Rendering)**:
   - **Giải thích**: Trong SSR, mỗi lần một trang web được yêu cầu, máy chủ sẽ tạo ra trang web động (với dữ liệu từ máy chủ) và gửi nó đến trình duyệt. Điều này đảm bảo rằng trang web có thể được tạo ra với dữ liệu mới mỗi khi nó được yêu cầu.
   - **Ưu điểm**: SEO tốt, trang web hiển thị nhanh với dữ liệu mới mỗi khi được yêu cầu.
   - **Sử dụng trong Next.js**: Sử dụng `getServerSideProps` hoặc `getInitialProps` để tạo SSR trang.

2. **CSR (Client-Side Rendering)**:
   - **Giải thích**: Trong CSR, trang web được tạo hoàn toàn bằng JavaScript trong trình duyệt của người dùng. Dữ liệu được tải bằng JavaScript sau khi trang đã được tải hoàn toàn. 
   - **Ưu điểm**: Trang web tải nhanh ban đầu vì không cần tải dữ liệu lớn từ máy chủ, trải nghiệm người dùng tốt trên các trình duyệt.
   - **Nhược điểm**: Không SEO tốt do trình duyệt không chờ đợi dữ liệu được tải trước khi index. Đối với các trang có nhiều dữ liệu, có thể có sự chậm trễ khi tải dữ liệu sau khi trang đã tải.
   - **Sử dụng trong Next.js**: Sử dụng `useEffect` hoặc `componentDidMount` để tải dữ liệu và render trang.

3. **SSG (Static Site Generation)**:
   - **Giải thích**: Trong SSG, trang web được tạo ra tại thời điểm build và được lưu trữ dưới dạng các file tĩnh. Mỗi lần trang web được yêu cầu, Next.js sẽ phục vụ trang tĩnh này mà không cần tạo trang mới.
   - **Ưu điểm**: Tải nhanh vì trang web đã được tạo trước và lưu trữ dưới dạng file tĩnh. Đối với các trang web không cần dữ liệu thay đổi thường xuyên, SSG là lựa chọn tốt.
   - **Sử dụng trong Next.js**: Sử dụng `getStaticProps` để tạo SSG trang.

4. **ISR (Incremental Static Regeneration)**:
   - **Giải thích**: Trong ISR, trang web được tạo ra tại thời điểm build và sau đó được cập nhật động khi có yêu cầu. Các phiên bản mới của trang được tạo ra và lưu trữ dưới dạng các file tĩnh khi có yêu cầu mới.
   - **Ưu điểm**: Kết hợp lợi ích của SSG và SSR. Trang tải nhanh ban đầu như SSG, nhưng có thể cập nhật dữ liệu khi có yêu cầu, giống như SSR.
   - **Sử dụng trong Next.js**: Sử dụng `getStaticProps` với `revalidate` để tạo ISR trang.

Khi xây dựng ứng dụng Next.js, việc chọn lựa giữa SSR, CSR, SSG, hoặc ISR phụ thuộc vào yêu cầu cụ thể của dự án và hiệu suất mong muốn của bạn.