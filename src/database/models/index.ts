import ConsultationRequest, {
    ConsultationRequestAttributes,
    ConsultationRequestCreationAttributes
} from "@src/database/models/ConsultationRequest/Model";
import Member, {MemberAttributes, MemberCreationAttributes} from "@src/database/models/Member/Model";
import Account, {AccountAttributes, AccountCreationAttributes} from "@src/database/models/Account/Model";

(
    async () => {
        const models = [
            ConsultationRequest,
            Member,
            Account
        ]
        for (const model of models) {
            await model.sync({force: false})
        }
    }
)()

export {
    Member,
    Account,
    ConsultationRequest,
}

export type {
    ConsultationRequestAttributes,
    ConsultationRequestCreationAttributes,
    MemberAttributes,
    MemberCreationAttributes,
    AccountAttributes,
    AccountCreationAttributes
}

