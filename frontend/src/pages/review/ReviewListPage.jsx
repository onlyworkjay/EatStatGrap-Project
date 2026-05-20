import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useSearch } from "../hooks/useSearch";
import Swal from "sweetalert2";
import "./ReviewPage.css";

const SORT_OPTIONS = [
    { value: "title", label: "제목" },
    { value: "content", label: "내용" },
    { value: "writer", label: "작성자" },
];

export default function ReviewPage() {
    const { filter, updateFilter } = useSearch();
    const navigate = useNavigate();

    // 로그인 여부 확인
    const isLoggedIn = !!localStorage.getItem("esg_auth_user");

    const handleWrite = () => {
        if (!isLoggedIn) {
            Swal.fire({
                icon: "warning",
                title: "로그인 필요",
                text: "로그인 후 이용 가능합니다.",
            });
            return;
        }

        navigate("/review/write");
    };

    return (
        <div className="review-page">
            <h1 className="review-title">후기</h1>

            {/* 검색 영역 */}
            <div className="review-search-area">
                <div className="search-bar-wrapper">
                    <SearchBar
                        value={filter.query}
                        onChange={(q) => updateFilter({ query: q })}
                        placeholder="검색"
                    />
                </div>

                {/* 정렬 */}
                <select
                    value={filter.sortBy}
                    onChange={(e) =>
                        updateFilter({ sortBy: e.target.value })
                    }
                    className="review-select"
                >
                    {SORT_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* 작성 버튼 */}
            <div className="review-button-area">
                <button className="write-button" onClick={handleWrite}>
                    작성
                </button>
            </div>

            {/* 후기 없을 때 */}
            <p className="empty-message">
                등록된 후기가 없습니다.
            </p>
        </div>
    );
}